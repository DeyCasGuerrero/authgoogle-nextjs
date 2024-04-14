export { default } from "next-auth/middleware"

export const config = {
    matcher:
        ["/comentarios",
            "/perfil",
            '/comentarios/:path*'
        ]
}