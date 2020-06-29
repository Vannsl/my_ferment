<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <a name="howto"></a>
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >Worum geht's?</h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <feature-right
        headline="Speichere alle Fermente"
        content="Lege Rezepte an, indem du detailierte Angaben mit Grammangaben und Prozenten der Salzlake oder einfach nur einen Namen aufschreibst. Du kannst sie nun beliebig oft zu deinem Monatsplaner hinzufügen. Die Paprikas waren schon zu matschig und die Karotten noch nicht fertig? Füge einfach Notizen für das nächste Mal hinzu."
      >
        <progress-svg slot="svg" />
      </feature-right>
      <feature-left
        headline="Behalte den Überblick"
        content="Egal ob Kefir, Kombucha oder milchsauer vergorenes. Alles wird unterschiedlich schnell fertig und muss nach einer bestimmten Anzahl an Tagen in den Kühlschrank. Das siehst du alles in einer Übersicht oder im Monatsplaner. Verhindere somit matschiges oder stark prickelndes Gemüse und die ungewollte Herstellung von Kombucha-Essig."
      >
        <examination-svg slot="svg" />
      </feature-left>
    </div>
  </section>
</template>

<script>
import FeatureRight from '@/components/FeatureRight'
import FeatureLeft from '@/components/FeatureLeft'
import ExaminationSvg from '@/components/svg/Examination'
import ProgressSvg from '@/components/svg/Progress'

export default {
  name: 'Features',
  components: {
    'feature-right': FeatureRight,
    'feature-left': FeatureLeft,
    'examination-svg': ExaminationSvg,
    'progress-svg': ProgressSvg
  }
}
</script>
