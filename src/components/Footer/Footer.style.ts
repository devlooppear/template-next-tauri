import styled from "@emotion/styled";
import { Box, Typography, Divider } from "@mui/material";
import { Theme } from "@mui/material/styles";
import Link from "next/link";

export const FooterContainer = styled(Box)`
  background-color: ${({ theme }) => (theme as Theme).palette.primary.main};
  color: ${({ theme }) => (theme as Theme).palette.primary.contrastText};
  margin-top: 32px;
  padding-top: 32px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  min-height: 10rem;

  @media (min-width: 600px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 900px) {
    padding-left: 64px;
    padding-right: 64px;
  }
`;

export const FooterWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const FooterLogo = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "href",
})`
  color: ${({ theme }) => (theme as Theme).palette.secondary.contrastText};
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const FooterLogoLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const FooterLinks = styled(Box)`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  a {
    color: ${({ theme }) => (theme as Theme).palette.secondary.contrastText};
    text-decoration: none;
    &:hover {
        opacity: 0.8;
    }
  }

  @media (min-width: 600px) {
    gap: 24px;
  }
`;

export const SocialIcons = styled(Box)`
  display: flex;
  gap: 8px;
`;

export const SocialIconButton = styled("a")`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => (theme as Theme).palette.secondary.contrastText};
  border-radius: 50%;
  padding: 6px;
  transition: color 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const FooterDivider = styled(Divider)`
  background-color: ${({ theme }) => (theme as Theme).palette.secondary.contrastText};
  opacity: 0.2;
  margin: 24px 0;
`;

export const FooterCopy = styled(Typography)`
  text-align: center;
  color: ${({ theme }) => (theme as Theme).palette.secondary.contrastText};
  opacity: 0.7;
`;
