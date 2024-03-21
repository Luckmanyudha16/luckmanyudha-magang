/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"https://cdn.dummyjson.com"
            }
        ]
    }
};

export default nextConfig;
