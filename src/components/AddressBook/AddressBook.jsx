import {Text,Checkbox,Table,TableContainer,Thead,Tbody,Tr,Th,Td,useColorModeValue} from "@chakra-ui/react";
import {PropTypes} from "prop-types";
import "./AddressBook.css";
import { useState } from "react";

const AddressBook = ({arr,func}) => {
    const bg = useColorModeValue("white", "gray.700");
    const textColor = useColorModeValue("#252733", "white"); 
    const bordercolor = useColorModeValue("yellow", "gray.700"); 
    const [rollNoarr, setRollNoarr] = useState([]);
    console.log(rollNoarr)
    func(rollNoarr);
    return(
        <div className="item">
            <TableContainer bg={bg} color={textColor}>
        <Table borderBottomColor={bordercolor}>
          <Thead>
            <Tr>
              <Th width="5%">
                {/* <Checkbox></Checkbox> */}
              </Th>
              <Th width="20%">
                <Text>Roll No.</Text>
              </Th>
              <Th>
                <Text textAlign="left">Name</Text>
              </Th>
              <Th>
                {/* <Text textAlign="right">Action</Text> */}
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {arr &&
              arr.map((item) => (
                <Tr key={item.roll}>
                  <Td>
                    <Checkbox
                      value={item.rollNo}
                      isChecked={rollNoarr.includes(item.rollNo)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setRollNoarr([...rollNoarr, item.rollNo]);
                        } else {
                          setRollNoarr(
                            rollNoarr.filter((roll) => roll !== item.rollNo)
                          );
                        }
                      }}

                      // onChange={(e) =>
                      //   e.target.checked
                      //     ? setRollNoarr((current) => [
                      //         ...current,
                      //         e.target.value,
                      //       ])
                      //     : setRollNoarr(
                      //         rollNoarr.filter((i) => i !== e.target.value)
                      //       )
                      // }
                    ></Checkbox>
                  </Td>
                  <Td>
                    <Text>{item.rollNo}</Text>
                  </Td>
                  <Td>
                    <Text textAlign="left">{item.name}</Text>
                  </Td>
                  <Td>
                    {/* <Text textAlign="right">Delete</Text> */}
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
        </div>
    )

}

AddressBook.propTypes = {
    arr: PropTypes.any,
    func: PropTypes.func,

}


export default AddressBook;