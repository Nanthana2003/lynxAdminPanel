import {PropTypes} from "prop-types";
import "./Paginate.css";
import  { useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import "./Paginate.css"
import Feedback from "../Feedback/Feedback";
import Clubcard from "../Clubcard/Clubcard";
import AddressBook from "../AddressBook/AddressBook";


function PaginatedItems({ itemsPerPage,itemlist,pageno ,searchval,filterval,filter2val,func2}) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  var p = [];
  const pullData = (data) => {
    func2(data);
  }

  

  useEffect(() => {
   
    const endOffset = itemOffset + itemsPerPage;
    if(itemlist!=null){
    
    
    setCurrentItems(itemlist.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(itemlist.length/itemsPerPage));
    if(pageno == 0 && (searchval!=null || filterval!=null)){
      p.splice(0,p.length-1);

      if(searchval!=null && filterval!=null){
        for(let i = 0; i<itemlist.length ; i++){
          if(((itemlist[i].name).toLowerCase()).indexOf((searchval).toLowerCase())!=-1 ){
            if(filterval == "isAdmin" && itemlist[i].isAdmin){
            if(!(p.includes(itemlist[i]))){
              p.push(itemlist[i]);
            }
          }
            else if(filterval == "isNotAdmin" && !(itemlist[i].isAdmin)){
              console.log(itemlist);
              if(!(p.includes(itemlist[i]))){
                p.push(itemlist[i]);
              }
            }
            // else if(filterval == "notifyAll" && itemlist[i].privileges.notifyAll){
            //   if(!(p.includes(itemlist[i]))){
            //     p.push(itemlist[i]);
            //   }
            // } 
          }
        }
      }
      else if(searchval!=null && filterval==null){
        for(let i = 0; i<itemlist.length ; i++){
          if(((itemlist[i].name).toLowerCase()).indexOf((searchval).toLowerCase())!=-1){
            if(!(p.includes(itemlist[i]))){
              p.push(itemlist[i]);
            }
          }
        }
      }
      else if(searchval==null && filterval!=null){
        for(let i = 0; i<itemlist.length ; i++){
          if(filterval == "isAdmin" && itemlist[i].isAdmin){
            if(!(p.includes(itemlist[i]))){
              p.push(itemlist[i]);
            }
          }
            else if(filterval == "isNotAdmin" && !(itemlist[i].isAdmin)){
              if(!(p.includes(itemlist[i]))){
                p.push(itemlist[i]);
              }
            }
            // else if(filterval == "notifyAll" && itemlist[i].privileges.notifyAll){
            //   if(!(p.includes(itemlist[i]))){
            //     p.push(itemlist[i]);
            //   }
            // } 
          
        }
      }

      
    
      setCurrentItems(p.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(p.length/itemsPerPage));

    }
    else if(pageno == 2 && (searchval!=null || filterval!=null || filter2val!=null)){
      p.splice(0,p.length-1);

      if(searchval!=null && filterval!=null && filter2val!=null){
        for(let i = 0; i<itemlist.length ; i++){
          if((itemlist[i].username).indexOf(searchval)!=-1 && (itemlist[i].typefeedback).indexOf(filterval)!=-1 && (itemlist[i].typepeople).indexOf(filter2val)!=-1){
            
            if(!(p.includes(itemlist[i]))){
              p.push(itemlist[i]);
            }
          }
        }
      }

      else if(searchval==null && filterval!=null && filter2val!=null){
        for(let i = 0; i<itemlist.length ; i++){
          if((itemlist[i].typepeople).indexOf(filter2val)!=-1 && (itemlist[i].typefeedback).indexOf(filterval)!=-1){
            if(!(p.includes(itemlist[i]))){
              p.push(itemlist[i]);
            }
          }
        }
      }
      else if(searchval!=null && filterval==null && filter2val!=null){
        for(let i = 0; i<itemlist.length ; i++){
          if((itemlist[i].username).indexOf(searchval)!=-1 && (itemlist[i].typepeople).indexOf(filter2val)!=-1){
            if(!(p.includes(itemlist[i]))){
              p.push(itemlist[i]);
            }
          }
        }
      }
      else if(searchval!=null && filterval!=null && filter2val==null){
        for(let i = 0; i<itemlist.length ; i++){
          if((itemlist[i].username).indexOf(searchval)!=-1 && (itemlist[i].typefeedback).indexOf(filterval)!=-1){
            if(!(p.includes(itemlist[i]))){
              p.push(itemlist[i]);
            }
          }
        }
      }

      else if(searchval!=null && filterval==null && filter2val==null){
        for(let i = 0; i<itemlist.length ; i++){
          if((itemlist[i].username).indexOf(searchval)!=-1){
            if(!(p.includes(itemlist[i]))){
              p.push(itemlist[i]);
            }
          }
        }
      }
      else if(searchval==null && filterval!=null && filter2val==null){
        for(let i = 0; i<itemlist.length ; i++){
          if((itemlist[i].typefeedback).indexOf(filterval)!=-1){ 
            if(!(p.includes(itemlist[i]))){
              p.push(itemlist[i]);
            }
          }
        }
      }
      else if(searchval==null && filterval==null && filter2val!=null){
        for(let i = 0; i<itemlist.length ; i++){
          if((itemlist[i].typepeople).indexOf(filter2val)!=-1){ 
            if(!(p.includes(itemlist[i]))){
              p.push(itemlist[i]);
            }
          }
        }
      }

      
    
      setCurrentItems(p.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(p.length/itemsPerPage));

    }

    else if(pageno == 1 && (searchval!=null )){
      p.splice(0,p.length-1);
      // if(searchval!=null && filterval!=null){
      //   for(let i = 0; i<itemlist.length ; i++){
      //     if((itemlist[i].rollNo).indexOf(searchval)!=-1 && (itemlist[i].name).indexOf(filterval)!=-1){
      //       if(!(p.includes(itemlist[i]))){
      //         p.push(itemlist[i]);
      //       }
      //     }
      //   }
      // }

      if(searchval!=null ){
        for(let i = 0; i<itemlist.length ; i++){
          if(((itemlist[i].rollNo).toString()).indexOf(searchval)!=-1){
            if(!(p.includes(itemlist[i]))){
              p.push(itemlist[i]);
            }
          }
        }
      }
      // else if(searchval==null && filterval!=null){
      //   for(let i = 0; i<itemlist.length ; i++){
      //     if((itemlist[i].name).indexOf(filterval)!=-1){ 
      //       if(!(p.includes(itemlist[i]))){
      //         p.push(itemlist[i]);
      //       }
      //     }
      //   }
      // }
    
      setCurrentItems(p.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(p.length/itemsPerPage));

    }
    }
    
  
    
  }, [itemOffset, itemsPerPage,searchval,filterval,filter2val]);
  


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage)%itemlist.length ;
    setItemOffset(newOffset);
  };

  return (
    <>
      {(pageno==0)?<Clubcard arr={currentItems}/>:((pageno==1)?<AddressBook arr={currentItems} func={pullData}/> :<Feedback arr={currentItems}/>)}
      <div className="container">
      <ReactPaginate
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< "
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
        position="absolute" 
        margin="auto"
      />
      </div>
    </>
  );
}

PaginatedItems.propTypes = {
    itemsPerPage: PropTypes.number,
    itemlist: PropTypes.array,
    pageno: PropTypes.number,
    searchval: PropTypes.any,
    filterval: PropTypes.any,
    filter2val: PropTypes.any,
    func2: PropTypes.func,
}



export default PaginatedItems;