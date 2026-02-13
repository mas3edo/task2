import React from "react";
import ServerClinnt from "./(product)/serverclinnt";
import BreadcrumbBar from "./head";
import RatingsSection from "../(rating)/rating";
import CommentsList from "./comments";
import SimilarItemsSection from "./(carts)/SimilarItemsSection";

export default function All() {
  return (
    <>
      <BreadcrumbBar />
      <ServerClinnt />
      <RatingsSection />
      <CommentsList />
      <SimilarItemsSection />
    </>
  );
}
