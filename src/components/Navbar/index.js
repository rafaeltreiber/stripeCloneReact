import React from "react";

import { Products, Developers, Company } from "../content";
import { Container, DropdownStyles } from "./styles";
import { DropdownOption, DropdownProvider, DropdownRoot } from "../../Dropdown";

function Navbar() {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption
                name="Produtos"
                content={Products}
                backgroundHeight = {286}

              ></DropdownOption>
            </li>
            <li>
              <DropdownOption
                name="Desenvolvedores"
                content={Developers}
                backgroundHeight = {167}
              ></DropdownOption>
            </li>
            <li>
              <DropdownOption 
              name="Empresa" 
              content={Company}
              backgroundHeight = {215}
              ></DropdownOption>
            </li>
          </ul>
        </Container>
        <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
  );
}

export default Navbar;
