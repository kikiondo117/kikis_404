import snippet from "@segment/snippet";

export const renderSegmentSnippet = () => {
  const options = {
    apiKey: "8FRB6yEFpo8At9HTJBxwPod6WNFDD0EX",
    // Añade aquí otras opciones de configuración que necesites
  };

  return snippet.min(options);
};
