import { Fade, Modal } from "@mui/material"
import PropTypes from "prop-types";
import clsx from "clsx";
import { Box, styled } from "@mui/system";
import React, { useState } from "react"
import { Col } from "react-bootstrap"
import { ModalUnstyled } from "@mui/base";

export const ProjectCard = ({ title, description, imgUrl}) => {
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
      
      const Modal = styled(ModalUnstyled)`
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
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 'fit-content',
        backgroundColor:  '#0A1929',
        border: '2px solid currentColor',
        boxShadow: 24,
        padding: '16px 32px 24px 32px',
      });

    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4 onClick={() => handleOpen()}>{title}</h4>
                    <span>{description}</span>
                </div>
                <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                >
                    <Fade in={open} timeout={300}>
                        <Box sx={style}>
                            <h4 id="modal-title">{title}</h4>
                            <span id="modal-text">Lorem Ipsum</span>
                            {/* find a way to render an HTML file directly */}
                        </Box>
                    </Fade>
                </Modal>
            </div>
        </Col>
    )
}