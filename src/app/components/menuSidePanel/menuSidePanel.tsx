import { FC } from "react";
import { SidePanelResponsive } from "@alfalab/core-components/side-panel/responsive";
import { Circle } from "@alfalab/core-components/icon-view/circle";
import { MailMIcon } from "@alfalab/icons/glyph/dist/MailMIcon";
import { PhoneMIcon } from "@alfalab/icons/glyph/dist/PhoneMIcon";
import { WhatsappMIcon } from "@alfalab/icons/logotype/dist/WhatsappMIcon";
import style from "../../App.module.scss";
import NavBar from "../navBar/NavBar";

type MenuSidePanelProps = {
  open: boolean;
  handleModalOpen: () => void;
};

const MenuSidePanel: FC<MenuSidePanelProps> = ({ open, handleModalOpen }) => {
  return (
    <>
      <SidePanelResponsive
        open={open}
        onClose={handleModalOpen}
        size="s"
        breakpoint={440}
        placement={"right"}
        nativeScrollbar={true}
        className={style.sidePanel}
      >
        <SidePanelResponsive.Header hasCloser={true} sticky={true} />
        <SidePanelResponsive.Content>
          <div style={{ position: "relative", marginTop: "15px" }}>
            <NavBar handleModalOpen={handleModalOpen} />
          </div>
        </SidePanelResponsive.Content>
        <SidePanelResponsive.Footer sticky={true}>
          <div>
            <a
              href="https://store.alfabank.ru/policy"
              target="_blank"
              rel="noreferrer"
              className="text-s font-medium"
            >
              Политика конфиденциальности <br /> и обработки персональных данных
            </a>
            <div className="mt-4">
              <a href="mailto:info@alfabankstore.ru">
                <Circle size={32} backgroundColor="">
                  <MailMIcon fill="black" />
                </Circle>
              </a>
              <a href="tel:+7 906 061-60-20" className="ml-1">
                <Circle size={32} backgroundColor="">
                  <PhoneMIcon fill="black" />
                </Circle>
              </a>
              <a
                href="https://wa.me/79060616020"
                className="ml-1"
                target="_blank"
                rel="noreferrer"
              >
                <Circle size={32} backgroundColor="">
                  <WhatsappMIcon fill="black" />
                </Circle>
              </a>
            </div>
          </div>
        </SidePanelResponsive.Footer>
      </SidePanelResponsive>
    </>
  );
};

export default MenuSidePanel;
