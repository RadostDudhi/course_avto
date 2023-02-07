import React from "react";
import { Input } from "antd";

import "./search.scss";
import Button from "../Button";

const Search = () => (
  <div className="search">
    <label className="search__title">Orders</label>
    <Input className="search__input" placeholder="Take your order" />
    <Button className="search__btn button">Search</Button>
  </div>
);

export default Search;
