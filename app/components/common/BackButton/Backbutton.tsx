import { useNavigate } from "@remix-run/react";

export function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      className=" border-solid border-2 text-white px-4  py-2 rounded-md"
      type="button"
      onClick={() => navigate(-1)}
    >
      Regresar
    </button>
  );
}
