import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import Userwidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";


const HomePage = () => {

    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    const { _id, picturePath } = useSelector((state) => state.user);

    return (<Box>
        <Navbar />

        <Box width="100%"
            padding="2rem 6%"
            display={isNonMobileScreens ? "flex" : "block"}
            gap="0.5rem"
            justifyContent="space-between">
            <Box flexBasis={isNonMobileScreens ? "25%" : undefined}>
                <Userwidget userId={_id} picturePath={picturePath} />
            </Box>

            <Box flexBasis={isNonMobileScreens ? "43%" : undefined}
                mt={isNonMobileScreens ? undefined : "2rem"}>



            </Box>

            <Box>
                <MyPostWidget pictuerPath = {picturePath} />
            </Box>

            {isNonMobileScreens && (<Box flexBasis="26%" />)}

        </Box>
    </Box>);
}

export default HomePage;