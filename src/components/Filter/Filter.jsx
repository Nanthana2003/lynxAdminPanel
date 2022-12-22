import { InputGroup } from "@chakra-ui/react";
import { InputLeftAddon } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import {PropTypes} from "prop-types";

const Filter = ({type,values,func}) => {
  return (
    <>
      <InputGroup size="sm"  width="50%" margin="10px">
        <InputLeftAddon>
          <p>Filter: </p>
        </InputLeftAddon>
        <Select placeholder={type} onChange={(e)=>{
          if(e.target.value == ""){
            func(null);
          }
          else{
            func(e.target.value)
          }
        }}>
          {values && values.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </Select>
      </InputGroup>
    </>
  );
};

Filter.propTypes = {
  type: PropTypes.any,
  values: PropTypes.any,
  func: PropTypes.any
}

export default Filter;
