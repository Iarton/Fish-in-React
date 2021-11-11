import { useSelector, useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import { setAttributes } from "../../../store/fish/action";
import { Grid, Button } from "@material-ui/core";

const InputAttributesForm = () => {
  const dispatch = useDispatch();
  const { fish } = useSelector((state) => state);

  const initialForm = {
    fishingSkill: fish.playerAttributes.fishingSkill,
    locationSkill: fish.playerAttributes.locationSkill,
    castSkill: fish.playerAttributes.castSkill,
    line: fish.equipment.line,
    hook: fish.equipment.hook,
    bodyOfWater: 1,
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
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
              <Grid item xs={4}>
                PSC: <Field type="number" name="fishingSkill" />
              </Grid>
              <Grid item xs={4}>
                IT / PC: <Field type="number" name="locationSkill" />
              </Grid>
              <Grid item xs={4}>
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
            {/*<div style={{ display: "flex", justifyContent: "center" }}>
            <Field as="select" name="bodyOfWater">
              <option value="1">Lago dos dois gostos</option>
              <option value="2">Mar</option>
              <option value="3">Praia</option>
            </Field>
          </div>*/}

            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                /*disabled={isSubmitting}*/
                style={{ display: "flex-center", marginTop: "10px" }}
              >
                Salvar Bonus
              </Button>
            </div>
          </Form>
          // )
        }
      </Formik>
    </div>
  );
};

export default InputAttributesForm;
