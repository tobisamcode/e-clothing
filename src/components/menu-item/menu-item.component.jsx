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
    <MenuItemContainer size={size} onClick={() => navigate(`${linkUrl}`)}>
      <ImageBackgroundContainer
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></ImageBackgroundContainer>
      <ContentContainer className="content">
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
