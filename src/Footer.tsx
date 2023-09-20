import { Box, Container, Link } from "@mui/material"

const Footer = () => {
  const linkStyle = {
    fontSize: "0.8rem",
    color: "lightGray", 
    '&:hover': {
      color: 'lightGray' 
    },
  };

  return (
    <Box component='footer' flexGrow={0} 
      sx={{ width: "100%", height: "70px", backgroundColor: "#884A39", position: "sticky", bottom: "0", color: "#fff", }}>
      <Container maxWidth="sm" sx={{py: 3, alignContent: "center", alignItems: "center", display: "flex"}}>
        <Link href="https://hydrangea-hakone.com" style={linkStyle}>ハイドレンジア箱根サイト(hydrange-hakone.com)</Link>
        <Box sx={{width: 20}} />
        <Link href="https://life.hydrangea-hakone.com" style={linkStyle}>入居者専用サイト</Link>
      </Container>
    </Box>
  )
}

export default Footer;