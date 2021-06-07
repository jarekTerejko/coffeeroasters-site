import { collection } from "../../data";
import { ContainerElement } from "../Container/ContainerElement";
import { HeadingSmall } from "../HeadingSmall/HeadingSmall";
import { ImageEl } from "../Image/ImageElement";
import {
  CollectionCard,
  CollectionCardDesc,
  CollectionCardImgWrapper,
  CollectionCardsWrapper,
  CollectionCardTextWrapper,
  CollectionHeadingLarge,
  CollectionWrapper,
} from "./CollectionElements";

const CollectionSection = () => {
  return (
    <CollectionWrapper>
      <ContainerElement>
        <CollectionHeadingLarge>our collection</CollectionHeadingLarge>
        <CollectionCardsWrapper>
          {collection.map((item, i) => {
            return (
              <CollectionCard key={i}>
                <CollectionCardImgWrapper>
                  <ImageEl src={item.image} />
                </CollectionCardImgWrapper>
                <CollectionCardTextWrapper>
                  <HeadingSmall collectionSection>{item.heading}</HeadingSmall>
                  <CollectionCardDesc>{item.description}</CollectionCardDesc>
                </CollectionCardTextWrapper>
              </CollectionCard>
            );
          })}
        </CollectionCardsWrapper>
      </ContainerElement>
    </CollectionWrapper>
  );
};

export default CollectionSection;
