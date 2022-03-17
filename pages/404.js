import { Box, Image } from "@chakra-ui/react";


function NotFoundPage  () {
    return (
        <Box align="center">
            <Image boxSize='xl' src='noFound.png' alt='404' />
        </Box>
    );
};

export default NotFoundPage;