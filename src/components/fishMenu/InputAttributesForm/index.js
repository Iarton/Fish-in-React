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
            Equipamento: <Field type="number" name="equipment" />
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
