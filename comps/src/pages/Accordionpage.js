import Accordion from "../components/Accordion.js";

function AcordionPage() {
  const data = [
    {
      id: 1,
      label: "Can I use React on project?",
      content: "yes, you can use React on project, blablabla",
    },
    {
      id: 2,
      label: "Can I use Java on project?",
      content: "yes, you can use Java on project, wewewewewewe",
    },
    {
      id: 3,
      label: "Can I use Go on project?",
      content: "yes, you can use Go on project, jkajajakajhajaj",
    },
  ];

  return (
    <div>
      <Accordion items={data} />
    </div>
  );
}

export default AcordionPage;
