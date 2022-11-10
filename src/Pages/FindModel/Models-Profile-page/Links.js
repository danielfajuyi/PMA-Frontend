import { LinkBtn } from "./Buttons";

function Links({ handleSection, activeSection }) {
  return (
    <section className="section link-container">
      <div className="links">
        <LinkBtn
          btnText="Photos"
          handleSection={handleSection}
          activeSection={activeSection}
        />
        <LinkBtn
          btnText="Stats"
          handleSection={handleSection}
          activeSection={activeSection}
        />
        <LinkBtn
          btnText="Bio"
          handleSection={handleSection}
          activeSection={activeSection}
        />
      </div>

      <div className="links">
        <LinkBtn
          btnText="Polaroids"
          handleSection={handleSection}
          activeSection={activeSection}
        />
        <LinkBtn
          btnText="Videos"
          handleSection={handleSection}
          activeSection={activeSection}
        />
      </div>
    </section>
  );
}
export default Links;
