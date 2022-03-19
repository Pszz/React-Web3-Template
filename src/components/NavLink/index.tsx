import React from 'react';
import { Link } from 'umi';

export interface INavLinkProps {
  path: string;
}

const NavLink: React.FC<INavLinkProps> = ({ path, children }) => {
  // 可以对应扩展，外联外部打开
  const hasProtocol = /^http.*/.test(path);
  if (hasProtocol) {
    return (
      <a href={path} target="_black">
        {children}
      </a>
    );
  }
  return <Link to={path}>{children}</Link>;
};

export default NavLink;
