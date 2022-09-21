import { Routes, Route, Link } from "react-router-dom";
import { PureHome, HomeProps } from "./stories/pages/Home";
import { ReactComponent as LogoSvg } from './stories/assets/logo.svg';
import { PureBlogs } from "./stories/pages/Blogs";
import { ApolloProvider } from "@apollo/client/react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PureBlog } from "./stories/pages/Blog";

const homeProps: HomeProps = {
  header: {
    icon: {
      href: "/", 
      children: <LogoSvg width={40} height={40} />
    }, 
    navs: [{href: "/about", text: "About"}, {href: "/projects", text: "Projects"}, {href: "/blogs", text: "Blogs"}]
  },
  main: {
    logo: "/269177376.jpg",
    name: "Wenfeng Sui",
    bio: "You can do this, I believe in you.",
    socialIcons: [
      {link: "https://github.com/suiwenfeng", icon: <img alt='' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADKklEQVRoge2ZS0hVQRzGf1fN8mZRSbS4JZqL6LHoIbVQAhOhnQt3RaukN/SwFlFB0Kakx7UW1baCoEVg0S6KIDSJqEyiyAgpi0qhSCuSvC3mnLqMc87MnDP3tvB+8OfCmZnv+/53zsz5zzlQQAGTGwmHXAuBNcBKYAUwH5gFTAG+AMPAS+AJcBvoBTIO9SNhBtAKdCHM2MQAcBRI5d014l9tA74amg2LH0AaqMiX+QbguQPjcnwEWnJtfgswlgPz2XERMcNOUQKcz7Hx7LgBlLpM4EIezfvRCRS7ML//P5j342Rc803A7wDyrUCN9/s0grlXwD5gKdAc0q85qvlpnkgQcbXUvwWxk+iMjyA2g6KssamQ/oOIB6I1jmiMlCnGVCIeTo2eqTIvUsBa4DBQqxhXqtFqtzU/GxjVkLrcJXQJjALzVAOLVBeBTUBSIxppWgMwR9OeBDbbEJosykZrm8FYZ6DXj2HxucSA7BNui7CUx6nTXSYPVN1Cqw0EdyF2B1cYBLYb9GsyITtH+L/wGLfnCB8JoEejfUUepJqB5RqhSx6Za2SAy5o+i02I/JOS8X3oELr190EeoJqBqRqRgXgeQ/FW0z5TvqBKwGkZ6xgTqlNVAt80JJVuvChRpWkfli+oEujXkKw3tmMPHfeQCckJwhfSG9SFXFwkEesrTPumPEg1A30aoSrgdBynATiD/vbsMiGqwOzgnkacleOiBOgw0MsA9aakdwwJe4C6GObrgYeGWkPot/i/2GZI6kc3opapMeCuAXYADyw1TpmaB3GcfCcRbEQUen0hIm0G3O2WxjPAOLDIJgGAnQqiDYjS972irdOQtxh9uSLHVVvzIO63FxLRa0TVWAf8ktpsDjitFuZHgAVREgDxqvynRLjKa2sAngHfgfvoj6DZqLZI4EBU8z72SITX4hIi3n2amL+Og7NHAjgrEe+OS4refC9Q7kAHEEmkJYFu4BDieHksAmeY+UfA3NiuFTjIxMXrhy2CzN9FUfe7RC3iW5frBMaA4+Tg24AK5YjZ+Jwlbotx/pm/h9jx8o7pwF7ETmWLDuAWYjsuoIACJiv+ACQHTx+P61WsAAAAAElFTkSuQmCC"></img>}, 
      {link: "https://leetcode.cn/u/wfsui", icon: <img alt='' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADSElEQVRogc3aS4gcVRTG8V/3aDLgC2OYTNRJfCBqUBCycCkE34qCYBBdqKAL3Si4cudGEQRBQU1EZSSoSBCfiAs3ogufCxXHZ9QQoknUWRhCZpLMjIubDN0zdW/dTlV1+cHddNf5zv8Wt6rOqVsMT6N4GtP4GbcNMXdlrcT7WOgZc7i8TahcrcR7+uGPjceqmnerGpRoBbbjhsj/fzWcv5JW4G3FZ35BuA5OaY2uRCfiTXH4nTi3NboSjeA1cfhdOK81uhKVwe/BRa3RlWgEr4jD78WG1uhKdAJeF4efx53otAWYUtmy6R2/4B7N376zVbZsYuMjrGmBt08j2GZw+GNjB9YNnfqouni5BDBn/I71Q2bXxWQG3EH8m3HcTzhzmPAvJWAOCwXa+T0xq3GvcBuNxX2P8WHAv5CAOIhrEvET+DER/x3GGmLXwfOJ5DO4LsNnrQAa8/kGJ9fMroMtiaSzuGkAvzF8nfB7pC5wAvyziWSHcctx+J6BryKe2ytTH1UHz0SSLOAINlfwPx2fFfg+UMGzTw8XmPfC31FDjlPxbo/vq0IvUVmbhKa7CH4Od9WRpEfrhQu8Nn2uGH4e99WZqAltEoe/v0WubD2peAKPtwk1iL60HH4aJ2XEbsAnOFTgUWUcwFsyn9R/Fhi8kRHXEWqaOsFLnxFFndGqyKTKdLbmG/arlv5QNIH9Bb+dlmH+t1BWNKndOQcVFVs75DXkDwl3qyaWzwxuXJqwCGpSeIOwVJvl1SmXYaPQctalWXyMX3MOvl3xGZjGpTVCNaZRYa0VTWIfLmkPLV8Piq/FPbi4PbQ8jeAD8Un8gQtrynW30Bt8qlp5vkyr8K34JHbjgoo5Hl3iOY+rK3r2aUy6h92l/w3EIHoi4rmtGvJyjUuXCINuVnTwVMJva13gvVqLHxJJf5P3hq2L5xI+BzR4g1iDqUTynTgnEd/Fi4n4GVzfEPuizhI251KTuCIS904ibgbXNsy+qAmhNkrVLVNCgz4pvEqfTRw7K74N25hyJpEzDuHmIbMvap1QXB0v/BH/g+8lJvCFweH/UdCctKVRoeHfrxx8TtgMrG2Tu85dw9W4FVcKFeu48KHHPuF6+VDYvZ+qMaf/ALNBOrOp6FubAAAAAElFTkSuQmCC"></img>, },
      {link: "https://www.linkedin.com/in/suiwenfeng", icon: <img alt='' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACsUlEQVRoge2ZS2hTQRSGv8RHu6iIWnxRqtvutFKXChYEly58UkGh2r24cuNKFCzYjQtBqtAiamsLunJhcaUW3LupiogPFEttKiTSNC5OLqTjmUzuY+4NmB8OSc7cM/OdyZ3J3BNoqaX/WzlP/bYDO4GO6ucl4DNQ8jRebHUC54H7wHugDFQMKwPvqtcMAlsyITXUB0wgM2sCu6xUjd2XOjXQDUyFgHXZJNCVFvwAUEgQPrBF4JRP8Dww4gHctGE8bC554F4K8IGNJp3EzRThA7uRFPyJDOADG4gL3039BfsSuALcAn57SOAXMXenelvlM1bfp0c8JFABHkWF73N0fNG4fh36L3BcWwF6oyQw4ej4sXH9IQ/wgT20Qdq2qk7k8LXekeQ08BxZK0PARsf1UVVCDofzjQYM4m82o9o5DXStJYH+BpK8inwDtRoDeuq0zwCzyC0xh6yZA8AlYJNjvH7gbgNcgByJXTNyQYl742gfsozXg2yZ9cab0wLziq8d2GUZKK5uW/xvgeuO2N1Am+nUEthh8Selg8B+xT/uiFsDbDedGmiH4ktKl4EXwGvgsNH2CfjuiN9gOnzOtKYz1dcccFRp/xG2Qy2BpbCdhNC2mvdblfaiI75gOrQEviLbW7OpDHwznVoCReCjd5zw+oBSlrGtgVm/LJH0SnPaEpjxCBJVKpMtgSmaq4r2B3iqNdgSmAeeeMMJr2ngZ9igvcjDRNan0AoxqneTTQD/ICo8yAP1YobwC8iDTCwdzzCB03HhAw1nAH8tKXiQw9doivB38FAfzSHlvjRm3tc/RwCcxM/CXgCO+QSvVRdSMUvid2IF2Spj7zZR1ItUGIoNwtZaEQHfkzq1os1I3WYcqR4s8y/wcrVtDDiLu4zSkHwtljZW/81aAL4gh7KWWmopQf0Fa/CvB2/ZfIYAAAAASUVORK5CYII="></img>, },
      {link: "https://stackoverflow.com/users/1803356/suiwenfeng", icon: <img alt='' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADD0lEQVRoge3YW6hUVRzH8Y8SWgZ5xSAqSjELikrCylM9dEFTA6sHHyuCrKdADB976iBFPUQgUmQRVC9FdIEQfDDLuyRkQUH2IIhmN1I7Z04dp4c1p1l7zz6zZ2bP7DnYfGHBmVm/2ev32/u/LmczYMCAAW0wG7txHHf32UtHrEW11n7GVf210z6zcUI9xD7M7KujDrgTFfUQW/trpzOeVQ9QxRP9tZPNfKzBrEn631UP8BduKclXS0zHD4K5b7EkQ3MpvlEP8SPmlmUwjxk4q27uN6zM0F2HPyLdZ0L4KcEjQmlMmPsHz2Xo1uF8pHu+LIOtcDN+kpyw72ucF8NR/zhWl+gxlwXYKRnia1wTaabjc8mSW1SuzeZchC2SIU7j3kgzD8ei/iMmX8G6zjQ8jU1Y2ET3lOQmNoZnov7lGI363+yF2SwejgY9h1dwxSTaIZyUfBrbhJULNqT6NvTMdcR9qUGrGMFruDpDfyUOpvRf4vJa//bo+7O4pIfe/2MNDmkMUsHrGiflxXgnpT2O22qGD9e+O6n+dEphNfZqDPI33sbSlH6jsEfET2495uAxXFuK6wzuxy6NQcbxHm6MtA/g10gzisvKNNuMe7BDdpAPcGtNt1j9bHRCKLEpxR34VPLYUK19/gS3C6YfMvkK1nW24wy+wkvCuabZPgDL8KHGIKWfg+ZmGJho3wvhnsQNwkaX5ibhXDQe/e5Iz12neEv2nUy3X/AxNuMuyfq+Xgh7FI+2ayDrzrTLfKwQdtghYR3Pm4Bjwp6xR9jAvsDvXfDSFWYIgTbhI5yS/4TOCMG7zsvCxvJiwessxeN4A9/JLruNqd8MC8FeaHbhvBKqCHd0THff3ywQXq8MCcvrn8KEPx1pRoRSHNXkLJQXoNqGttu0NHaRf6CHhbuUV995bUROmRQhHihmmlCfRc3Hk7jVsRN0+gSqeFWoz6KM1q7VEf/rOTAluOADjEV/z+ulkRTxWJUiFzqgeytNp21/kQAPau202at2HquKBJgIsU/yhVSvW6U2ZmHzAwYMmOL8C6PafuUA7urNAAAAAElFTkSuQmCC"></img>}],
    endpoints: [{name: "About", link: "/about"}, {"name": "Projects", link: "/projects"}, {"name": "Blogs", link: "/blogs"}]
  },
  footer: {
    date: "2022",
    who: {name: "suiwenfeng", link: "https://github.com/suiwenfeng"},
    usings: [{what: "react", link: "https://reactjs.org/"}, {what: "styled-components", link: "https://styled-components.com/"}]
  }
}

const client = new ApolloClient({
	uri: "https://api.github.com/graphql",
	cache: new InMemoryCache(),
	headers: {
		"GraphQL-Features": "discussions_api",
		Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_KEY}`,
	},
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<PureHome {...homeProps}/>} />
        <Route path="/blogs" element={<PureBlogs header={homeProps.header} footer={homeProps.footer}/>} />
        <Route path="/blog/:id" element={<PureBlog header={homeProps.header} footer={homeProps.footer}/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ApolloProvider>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
