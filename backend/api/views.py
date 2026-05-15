from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import EmailMessage

class ContactEmailView(APIView):
    def post(self, request):
        nombre = request.data.get('nombre')
        email = request.data.get('email')
        asunto = request.data.get('asunto')
        resultado_esperado = request.data.get('resultado_esperado', 'No especificado')
        mensaje = request.data.get('mensaje')
        archivo = request.FILES.get('archivo') # Captura el archivo adjunto

        if not all([nombre, email, asunto, mensaje]):
            return Response({"error": "Faltan campos obligatorios"}, status=status.HTTP_400_BAD_REQUEST)

        cuerpo_correo = f"""
Nuevo mensaje de contacto desde la web de MiMapa:

Nombre: {nombre}
Email: {email}
Asunto: {asunto}
Resultado Esperado: {resultado_esperado}

Mensaje o Requerimiento:
{mensaje}
"""
        try:
            email_msg = EmailMessage(
                subject=f"MiMapa Web: {asunto}",
                body=cuerpo_correo,
                from_email='analistageografica@gmail.com', # Esto se sobrescribe por settings usualmente
                to=['analistageografica@gmail.com'], # Correo de destino
                reply_to=[email],
            )

            if archivo:
                # Adjunta el archivo recibido directamente al correo
                email_msg.attach(archivo.name, archivo.read(), archivo.content_type)

            email_msg.send()
            return Response({"mensaje": "Correo enviado con éxito"}, status=status.HTTP_200_OK)
            
        except Exception as e:
            return Response({"error": f"Error al enviar el correo: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
