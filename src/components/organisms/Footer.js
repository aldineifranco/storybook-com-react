import React from "react";
import Container from "../Atoms/Container";
import Grid from "../Atoms/Grid";
import Heading from "../Atoms/Heading";
import styled from "styled-components";
import {
  FaPhone,
  FaBuilding,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
`;

const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary.dark};
  }
`;

const Footer = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>Breve Descrição</h6>
          </Heading>
          <p>
            is simply dummy text of the printing and typesetting industry is
            simply dummy text of the printing and typesetting.
          </p>
        </div>

        <div>
          <Heading>
            <h6>Contatos</h6>
          </Heading>
          <p>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            (18) 99999-9999
          </p>

          <p>
            <IconContainer>
              <FaBuilding />
            </IconContainer>
            is simply dummy text of the printing and typesetting.
          </p>
        </div>

        <div>
          <Heading>
            <h6>Redes Sociais</h6>

            <p>
              <FooterLink
                target="_blank"
                href="https://www.facebook.com/unimedpp"
              >
                <IconContainer>
                  <FaFacebookF />
                </IconContainer>
                Facebook
              </FooterLink>
            </p>

            <p>
              <FooterLink
                target="_blank"
                href="https://www.linkedin.com/company/unimed-presidente-prudente/"
              >
                <IconContainer>
                  <FaLinkedinIn />
                </IconContainer>
                Linkedin
              </FooterLink>
            </p>

            <p>
              <FooterLink
                target="_blank"
                href="https://www.instagram.com/unimedpresidenteprudente/"
              >
                <IconContainer>
                  <FaInstagram />
                </IconContainer>
                Instagram
              </FooterLink>
            </p>
          </Heading>
        </div>
      </Grid>
    </Container>
  </Root>
);

Footer.defaultProps = {};

Footer.propTypes = {};

export default Footer;
