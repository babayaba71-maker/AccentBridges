# Alma Bici — app propia (com.myl.bici)

Cuenta el paseo con la pantalla apagada, cosa que Chrome NO puede hacer.

- Servicio en primer plano (foregroundServiceType="location") con LocationManager nativo.
- Distancia por haversine con las mismas compuertas que el tablero web: salto mayor a 2 m,
  precisión menor a 120 m, y descarte de tramos que implicarían más de 70 km/h.
- Respaldo por velocidad reportada cuando las coordenadas son gruesas.
- Notificación siempre visible con km, tiempo y promedio: Android no puede dormirlo.
- Botón "Mandar el parte a Alma" que lo envía al chat por el relé (X-Casita-Key) y además lo copia.
- APK de 20 KB, sin librerías, sin Google Play Services, sin internet salvo para mandar el parte.

Firmado con la misma llave (alma.keystore, alias alma) que el wallpaper.
Compilado sin Gradle: aapt2 link -> javac -> d8 -> zipalign -> apksigner.
