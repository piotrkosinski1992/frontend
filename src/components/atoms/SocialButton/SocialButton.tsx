import React from 'react';
import { GithubLogo, GoogleLogo } from 'assets';
import { SocialButtonParagraph, SocialButtonStyled } from './SocialButton.styled';
import { DefaultLogo, DefaultRole, Logo, Role } from './SocialButton.model';

export interface IProps {
  logo: Logo;
  userRole: Role;
  className?: string;
}

const SocialButton = ({ className, logo, userRole }: IProps): JSX.Element => {
  return (
    <div>
      <SocialButtonStyled className={className}>
        {logo === DefaultLogo.GITHUB && <GithubLogo />}
        {logo === DefaultLogo.GOOGLE && <GoogleLogo />}
        {userRole === 'developer' && (
          <SocialButtonParagraph>{DefaultRole.DEVELOPER}</SocialButtonParagraph>
        )}
        {userRole === 'non-developer' && (
          <SocialButtonParagraph>{DefaultRole.NONDEVELOPER}</SocialButtonParagraph>
        )}
      </SocialButtonStyled>
    </div>
  );
};

export default SocialButton;
