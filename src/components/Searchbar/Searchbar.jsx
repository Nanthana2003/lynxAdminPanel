import { Input } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { InputLeftAddon } from "@chakra-ui/react";
import {PropTypes} from "prop-types";

const Searchbar = ({func}) => {
  return (
    <>
      <InputGroup size="sm" width="50%" margin="10px">
        <InputLeftAddon>
          <p>Search: </p>
        </InputLeftAddon>
        <Input placeholder="Please Enter" onChange={(e) => {
          if(e.target.value!=""){
            func(e.target.value);
          }
          else{
            func(null);
          }
        }} />
      </InputGroup>
    </>
  );
};

Searchbar.propTypes = {
  func: PropTypes.any,
}

export default Searchbar;
