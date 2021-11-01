import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import { setAttributes } from "../../../store/fish/action";

const initialForm = {
  fishingSkill: 0,
  equipment: 0,
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
      {({ isSubmitting }) => (
        <Form>
          <div>
            Habilidade de Pesca: <Field type="number" name="fishingSkill" />
          </div>{" "}
          <div>
            Inteligencia ou Percepção: <Field type="number" name="locationSkill" />
          </div>{" "}
          <div>
            Força, Agilidade ou Pericia: <Field type="number" name="castSkill" />
          </div>{" "}
          Equipamento
          <div>
            Linha: <Field type="number" name="line" />
          </div>
          <div>
            Isca: <Field type="number" name="hook" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Salvar Bonus
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default InputAttributesForm;
