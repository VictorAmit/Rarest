import HomeLayout from "../Components/Organs/Body/HomeLayout";
import BlogLayout from "../Components/Organs/Body/BlogLayout";

export function renderLayout(props, state) {
    const { Component } = props;
    const { postData } = state;
    const { layout } = postData;

    if (!layout || !props.router) return;

    switch (layout) {
        case "post":
            return (
                <BlogLayout>
                    <Component {...props} postData={postData} />
                </BlogLayout>
            );
        case "home":
            return (
                <HomeLayout>
                    <Component {...props} />
                    {/* Put styled-jsx here */}
                </HomeLayout>
            );
        case "blog-post-list":
            return (
                <React.Fragment>
                    <Component {...props} />
                    {/* Put styled-jsx here */}
                </React.Fragment>
            );
        case "page":
        default:
            return (
                <React.Fragment>
                    <Component {...props} />
                    {/* Put styled-jsx here */}
                </React.Fragment>
            );
    }
}