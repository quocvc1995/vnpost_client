import React, {useState, useEffect, useRef, forwardRef} from 'react';
import { makeStyles } from '@material-ui/styles';
import MaterialTable from 'material-table';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from './actions';

import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const Product = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const columns = [
    { title: 'id', field: 'id' },
    { title: 'employee_name', field: 'employee_name' },
    { title: 'employee_salary', field: 'employee_salary' },
    { title: 'employee_age', field: 'employee_age' },
    { title: 'profile_image', field: 'profile_image' },
  ];

  const dispatch = useDispatch();
  const firstUpdate = useRef(true);
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const {data} = useSelector(state => ({
    data: state.product.lst
  }));

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }    
    setIsLoading(false);
  }, [data]);


  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  return (
    <div className={classes.root}>
         {isLoading ? (
        <div>Loading ...</div>
      ) : (
            <MaterialTable
              title="Sản Phẩm"
              columns={columns}
              data={data}
              icons={tableIcons}
              options={{
                actionsColumnIndex: -1,
                exportButton: true,
                filtering: true
              }}
            />
      )}
    </div>
  );
};

export default Product;
