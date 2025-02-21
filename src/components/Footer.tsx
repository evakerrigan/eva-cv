import resumePdf from "../assets/KseniiaLiubasova.pdf";

export const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <a className="button-download" href={resumePdf} download>
          <em>Скачать резюме</em>
        </a>
      </div>
    </div>
  );
};
