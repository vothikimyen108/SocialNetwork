import React from "react";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
//css
import PhotoListStyles from "./PhotoListStyles";

export default function PhotoList(props) {
  const classes = PhotoListStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={120} className={classes.imageList} cols={3}>
        {props.itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
