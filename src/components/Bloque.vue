<template>
  <v-card class="rounded-xl"

  >
    <v-toolbar
        color="grey darken-3"
        dark
    >
      <v-text-field
          label="Ingresa un nombre"
          outlined
          clearable
          hide-details
      >

      </v-text-field>

      <v-spacer></v-spacer>

      <v-text-field
          label="Repeticiones"
          class="mt-0 pt-0 ml-6"
          hide-details
          single-line
          type="number"
          min="1"

      ></v-text-field>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

    </v-toolbar>

    <v-list two-line light>
      <v-list-item-group
          v-model="selected"
          multiple
      >
        <template v-for="(item, index) in items">
          <v-list-item :key="item.title" active-class="green--text text--accent-6">
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>

                <v-list-item-subtitle
                    class="text--primary"
                    v-text="item.headline"
                ></v-list-item-subtitle>

                <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>

              </v-list-item-content>

              <v-list-item-action>
                <v-checkbox
                    :input-value="active"
                    color="blue"
                ></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>
          <v-row pa-3>
            <v-text-field
                label="Cantidad"

                class="mt-0 pt-3 ml-6 mb-4 text-center"
                hide-details
                single-line
                type="number"
                min="1"
                style="width: 50px"

            ></v-text-field>
            <v-radio-group
                v-model="row"
                row
                mandatory
            >
              <v-radio
                  label="Segundos"
                  color="blue"
                  value="seg"
              ></v-radio>
              <v-radio
                  label="Repeticiones"
                  color="blue"
                  value="reps"
              ></v-radio>
            </v-radio-group>
          </v-row>

          <v-divider
              v-if="index < items.length - 1"
              :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
      <v-col class="d-flex align-center justify-center">
        <v-btn to="/home/createexercise"
               fab
               class="mx-2"
               color="grey darken-3"

        >
          <v-icon color="white">
            mdi-plus
          </v-icon>
        </v-btn>

      </v-col>
    </v-list>
  </v-card>

</template>

<script>
export default {
  name: "Bloque",
  props: ["bloque"],
  data() {
    return {
      //Aca va la lista de ejercicios que sacamos de la api
    }
  }}

</script>