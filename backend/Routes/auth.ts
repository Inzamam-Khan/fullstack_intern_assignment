

const  express =require("express") 
import { loginUser,signupUser } from "../Controllers/authController";

const router = express.Router();

router.post("/login", loginUser);
router.post("/signup",signupUser)

export default router;
