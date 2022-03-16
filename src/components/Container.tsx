import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchMembers,
  filterBy,
  Loading,
  sortBy,
} from "../store/ActionCreators";
import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";
import { StyledContainer, StyledFooter } from "./Style";

function Container() {
  const dispatch: Dispatch<any> = useDispatch();
  React.useEffect(() => {
    dispatch(fetchMembers());
  }, [dispatch]);

  const [name, useName] = useState("");
  const [office, useOffice] = useState("");
  const HandleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value === "name" ? "name" : "office";
    dispatch(sortBy(value));
    useName("");
    useOffice("");
  };
  const HandleNameFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.currentTarget.name === "filter-name" ? "name" : "office";
    useName(e.target.value.trim());
    dispatch(
      filterBy({
        type,
        payload: { filter: type, name: e.target.value.trim(), office },
      })
    );
  };
  const HandleOfficeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.currentTarget.name === "filter-name" ? "name" : "office";
    useOffice(e.target.value.trim());
    dispatch(
      filterBy({
        type,
        payload: { filter: type, name, office: e.target.value.trim() },
      })
    );
  };
  return (
    <>
      <StyledContainer>
        <div className="container">
          <Header />
          <section>
            <div className="section-title">
              <div className="sort-by">
                <h3>Sort by:</h3>
                <select onChange={(e) => HandleChange(e)}>
                  <option id="0" value={"name"}>
                    name
                  </option>
                  <option id="1" value={"office"}>
                    office
                  </option>
                </select>
                <div className="filter">
                  <div className="filter-by-name">
                    <label htmlFor="filter-name">
                      <h3>Enter a name</h3>
                    </label>
                    <input
                      onChange={(e) => HandleNameFilter(e)}
                      name="filter-name"
                      value={name}
                      id="filter-name"
                    />
                  </div>
                  <div className="filter-by-office">
                    <label htmlFor="filter-office">
                      <h3>Enter office</h3>
                    </label>
                    <input
                      onChange={(e) => HandleOfficeFilter(e)}
                      name="filter-office"
                      id="filter-office"
                      value={office}
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr className="solid" />
            <Cards />
          </section>
        </div>
      </StyledContainer>
      <StyledFooter>
        <Footer />
      </StyledFooter>
    </>
  );
}

export default Container;
