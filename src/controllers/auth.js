// import * as authService from '../services/auth'

// export const register = async(req, res) =>{
//     const {name, phone, password} = req.body
//     try{
//         if(!name || !phone || !password) return res.status(400).json({
//             err: 1,
//             msg: 'Missing inputs!'
//         })

//         const response = await authService.registerService(req.body)
//         return res.status(200).json(response)
//     } catch(error){
//         return res.status(500).json({
//             err: -1,
//             msg: 'Fail at auth controller: ' + error
//         })
//     }
// }

// export const login = async(req, res) =>{
//     const { phone, password } = req.body
//     try {
//         if (!phone || !password) return res.status(400).json({
//             err: 1,
//             msg: 'Missing inputs!'
//         })

//         // Xác thực thông tin đăng nhập
//         const response = await authService.loginService(req.body)
//         if (response.err === 0) {
//             // Nếu đăng nhập thành công, kiểm tra số điện thoại để xác định vai trò
//             const isAdmin = (phone === '0965947827')

//             // Định tuyến dựa trên vai trò
//             if (isAdmin) {
//                 // Nếu là admin, định tuyến đến trang admin
//                 return res.redirect('/admin')
//             } else {
//                 // Nếu không phải admin, định tuyến đến trang người dùng
//                 return res.redirect('/user')
//             }
//         } else {
//             // Nếu đăng nhập không thành công, trả về thông báo lỗi
//             return res.status(401).json({
//                 err: response.err,
//                 msg: response.msg
//             })
//         }
//     } catch(error){
//         return res.status(500).json({
//             err: -1,
//             msg: 'Fail at auth controller: ' + error
//         })
//     }
// }


import * as authService from '../services/auth'

export const register = async(req, res) =>{
    const {name, phone, password} = req.body
    try{
        if(!name || !phone || !password) return res.status(400).json({
            err: 1,
            msg: 'Missing inputs!'
        })

        const response = await authService.registerService(req.body)
    return res.status(200).json(response)
    }catch(error){
        return res.status (500).json({
            err: -1,
            msg: 'Fail at auth controller: '+error
        })
    }
}

export const login = async(req, res) =>{
    const {phone, password} = req.body
    try{
        if(!phone || !password) return res.status(400).json({
            err: 1,
            msg: 'Missing inputs!'
        })

        const response = await authService.loginService(req.body)
    return res.status(200).json(response)
    }catch(error){
        return res.status (500).json({
            err: -1,
            msg: 'Fail at auth controller: ' + error
        })
    }
}