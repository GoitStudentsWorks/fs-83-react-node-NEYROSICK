import {
  NavContainer,
  NavLi,
  NavList,
  StyledLink,
} from '../NoticesCategoriesNav/NoticesCategoriesNav.styled.js';
import categories from '../NoticesCategoriesNav/categories.js';
import { useLocation } from 'react-router-dom';
import { selectIsAuthenticated } from '../../../redux/auth/selectors.jsx';
import { useSelector } from 'react-redux';
const { publicCategories, userCategories } = categories;

const NoticesCategoriesNav = () => {
  const { search } = useLocation();
  const location = useLocation();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <NavContainer>
      <NavList>
        {publicCategories.map(({ id, to, text }) => (
          <NavLi key={id}>
            <StyledLink
              to={{ pathname: to, search }}
              active={location.pathname === to ? 'true' : undefined}
            >
              {text}
            </StyledLink>
          </NavLi>
        ))}
      </NavList>
      {isAuthenticated && (
        <NavList>
          {userCategories.map(({ id, to, text }) => (
            <NavLi key={id}>
              <StyledLink
                to={{ pathname: to, search }}
                active={location.pathname === to ? 'true' : undefined}
              >
                {text}
              </StyledLink>
            </NavLi>
          ))}
        </NavList>
      )}
    </NavContainer>
  );
};

export default NoticesCategoriesNav;
