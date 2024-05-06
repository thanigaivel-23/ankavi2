import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MDBDataTable } from 'mdbreact'
import NavBar from '../layouts/NavBar';
import AdminNavbar from './AdminNavbar';
import Loader from '../layouts/Loader';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { Popconfirm } from 'antd';
import { deleteUser, getUsers } from '../../actions/userActions';
import { clearError, clearUserDeleted } from '../../slices/userSlice';
import MetaData from '../layouts/MetaData';

const UsersList = () => {

  const { users = [], loading = true, error, isUserDeleted } = useSelector(state => state.userState)

  const dispatch = useDispatch()

  const setUsers = () => {
    const data = {
      columns: [

        {
          label: 'Name',
          field: 'name',
          sort: 'asc'
        },
        {
          label: 'Email',
          field: 'email',
          sort: 'asc'
        },
        {
          label: 'Role',
          field: 'role',
          sort: 'asc'
        },
        {
          label: 'Action',
          field: 'action',
          sort: 'asc'
        },
        {
          label: 'ID',
          field: 'id',
          sort: 'asc'
        }
      ],
      rows: []
    }
    users.forEach(user => {
      data.rows.push({
        name: user.name,
        email: user.email,
        role: user.role,
        id: user._id,
        action: (
          <>

            <div className='tw-text-center tw-flex tw-justify-center tw-gap-x-2'>

              <Link to={`/admin/user/${user._id}`} className='tw-bg-blue-500 tw-p-2 
                            tw-rounded-md '><MdOutlineEdit className='tw-text-white tw-text-xl' /></Link>

              <Popconfirm title="Are you sure?" placement='top' icon={false} okText="Yes" cancelText="No" onConfirm={(e) => deleteHandler(e, user._id)}
              >
                <button className='tw-bg-red-500 tw-p-2 
                                 tw-rounded-md'><RiDeleteBin6Line className='tw-text-white tw-text-xl' /></button>

              </Popconfirm>
            </div>

          </>
        )
      })
    });

    return data
  }

  const deleteHandler = (e, id) => {
    e.target.disabled = true
    dispatch(deleteUser(id))
  }

  useEffect(() => {


    if (error) {
      toast.error(error)
      dispatch(clearError())
      return
    }

    if (isUserDeleted) {
      toast.success('Product Deleted Successfully')
      dispatch(clearUserDeleted())
      return
    }

    dispatch(getUsers)


  }, [error, dispatch, isUserDeleted])

  return (
    <>
      <MetaData title={'Ankavi Silks - Users'} />

      {/* nav bar */}
      <NavBar />

      {/*admin nav bar */}
      <AdminNavbar />

      {loading ? <Loader /> :

        <MDBDataTable
          data={setUsers()}
          bordered
          hover
          striped
          responsive
          className='tw-px-3 tw-mx-auto tw-w-[98%] lg:tw-w-[80%]' />

      }
    </>
  )

}

export default UsersList