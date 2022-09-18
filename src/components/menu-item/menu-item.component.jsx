import { useNavigate } from "react-router-dom";
import {
  ContentContainer,
  ContentSubtitle,
  ContentTitle,
  ImageBackgroundContainer,
  MenuItemContainer
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();

  return (
    <MenuItemContainer onClick={() => navigate(`${linkUrl}`)}>
      <ImageBackgroundContainer
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        className="background-image"
      ></ImageBackgroundContainer>
      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
