export function Nav(){
    return(
        <nav class="flex">
        <div class="link-wrap">
          <div class="active page-link" dest="home">home</div>
          <div class="page-link" dest="about">about</div>
          <div class="page-link" dest="portfolio">portfolio</div>
          <div class="page-link" dest="blog">blog</div>
          <div class="page-link" dest="contact">contact</div>
        </div>
        <i class="mdi mdi-menu"></i>
      </nav>
        
    )
}