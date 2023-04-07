import PropTypes from "prop-types";
import clsx from "clsx";
import { ModalUnstyled } from "@mui/base";
import { Fade, Modal } from "@mui/material"
import { Box, styled } from "@mui/system";
import React, { useState } from "react"
import { Col } from "react-bootstrap"
import github from "../assets/img/github.svg";
import extLink from "../assets/img/link-alt.svg";

export const ProjectCard = ({ title, description, imgUrl, git, link, article, article_enabled }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const BackdropUnstyled = React.forwardRef((props, ref) => {
    const { open, className, ...other } = props;
    return (
      <div
        className={clsx({ 'MuiBackdrop-open': open }, className)}
        ref={ref}
        {...other}
      />
    );
  });
    
  BackdropUnstyled.propTypes = {
    className: PropTypes.string.isRequired,
    open: PropTypes.bool,
  };
  
  const ModalStyle = styled(ModalUnstyled)`
    position: fixed;
    z-index: 1300;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
  `;

  const style = (theme) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -45%)',
    width: '47.87vw', /* 800 */
    height: 'fit-content', /* '84.01vh',  720 */
    maxHeight: '81.01vh',
    backgroundColor:  '#0A1929',
    border: '2px solid currentColor',
    boxShadow: 24,
    padding: '24px 32px 24px 32px',
  });

  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx" id="proj-txtx">
          <div className="clickable" onClick={() => article_enabled ? handleOpen() : ""}>
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
            <div className="link-icons">
              <a href={git} target="_blank" id="github"
              style={{display: git === "" ? 'none' : ''}}>
                <img src={github}/>
              </a>
              <a href={link} target="_blank" id="link"
              style={{display: link === "" ? "none" : ""}}>
                <img src={extLink}/>
              </a>
            </div>
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        >
          <Fade in={open} timeout={300} >
            <Box sx={style} >
              <div id="modal" slot={ModalStyle} dangerouslySetInnerHTML={{__html: article}}>
                {/* <h4 id="modal-title">{title}</h4>
                <span id="modal-text">Lorem Ipsum</span> */}
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    </Col>
  )
}