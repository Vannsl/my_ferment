<template>
  <section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >Was kann ich tun?</h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <teaser-column :rows="3" action="Zu den Rezepten">
        <template v-slot:overline>MILCHSAUER ODER MIT KULTUR</template>
        <template v-slot:headline>Rezeptesammlung</template>
        <template
          v-slot:content
        >Im Keller, im Kühlschrank, für 2 Wochen, für 72 Stunden. Den Überblick zu behalten, ist schwieriger als erwartet. Spicke hier zu den Rezepten für das beste Ergebnis.</template>
      </teaser-column>
      <teaser-column :rows="3" action="Zu meinen Fermenten">
        <template v-slot:overline>DUNKLE ECKE, KELLER, KÜHLSCHRANK</template>
        <template v-slot:headline>Meine Fermente</template>
        <template
          v-slot:content
        >Raumtemperatur, Keller, Kühlschrank - wann wo? Bisher schrieb ich auf Etiketten, wann etwas wohin gestellt werden muss. Jetzt gibt es alles auf einen Blick, ohne hartnäckige Klebereste.</template>
      </teaser-column>
      <teaser-column :rows="3" action="Zum Saisonkalender">
        <template v-slot:overline>GEMÜßE UND OBST</template>
        <template v-slot:headline>Saisonkalender</template>
        <template
          v-slot:content
        >Alles aufgemampft? Finde heraus, welches Gemüße und Obst gerade in der Saison und auf dem Markt oder im Supermarkt frisch zur Verfügung stehen.</template>
      </teaser-column>
    </div>
  </section>
</template>

<script>
import TeaserColumn from '@/components/TeaserColumn'

export default {
  name: 'Teasers',
  components: {
    'teaser-column': TeaserColumn
  }
}
</script>
