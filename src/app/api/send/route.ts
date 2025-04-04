import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST(req : Request) {
  const { emailFrom, asunto, message} = await req.json()
  try {
    const {data, error} = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: 'royer.boni13@gmail.com',
      subject: asunto,
      replyTo: emailFrom,
      react: await EmailTemplate({message: message}),
    })
    if (error){
      return Response.json({error},{status:500})
    }
    return Response.json(data)
  }catch (error){
    return Response.json({error: 'Error al enviar el correo'}, {status:500})
  }
}