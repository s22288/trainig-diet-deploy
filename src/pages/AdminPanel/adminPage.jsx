import AdminMainPanel from "../../components/Big/AdminPage/adminPanel"
import AdminNavbar from "../../components/Medium/navbar/adminNavbar"
import backgroundSVG from "../../photo/wave.svg"

const AdminPanel = () => {
    return (
        <div style={{
            backgroundColor: 'white',
            height: "100vh",
            backgroundSize: "cover",
        }}>
            <AdminNavbar />
            <AdminMainPanel />
        </div>
    )
}

export default AdminPanel