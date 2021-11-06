import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import { setAttributes } from "../../../store/fish/action";
import { Grid } from "@material-ui/core";

const initialForm = {
  fishingSkill: 0,
  locationSkill: 0,
  castSkill: 0,
  line: 0,
  hook: 0,
  bodyOfWater: 1,
};

const InputAttributesForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialForm}
      onSubmit={(values) => {
        dispatch(setAttributes(values));
      }}
    >
      {
        //({ isSubmitting }) => (
        <Form>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h2>Atributos do Jogador</h2>
          </div>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              Pesca: <Field type="number" name="fishingSkill" />
            </Grid>
            <Grid item xs={4}>
              IT / PC: <Field type="number" name="locationSkill" />
            </Grid>
            <Grid item xs={5}>
              FÇ / AG / PR: <Field type="number" name="castSkill" />
            </Grid>
          </Grid>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h2>Atributos do Equipamento</h2>
            </div>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              Linha: <Field type="number" name="line" />
            </Grid>
            <Grid item xs={6}>
              Isca: <Field type="number" name="hook" />
            </Grid>
          </Grid>

          <Field as="select" name="bodyOfWater">
            <option value="1">Lago dos dois gostos</option>
            <option value="2">Mar</option>
            <option value="3">Praia</option>
          </Field>
          <button type="submit" /*disabled={isSubmitting}*/>
            Salvar Bonus
          </button>
        </Form>
        // )
      }
    </Formik>
  );
};

export default InputAttributesForm;
