export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      kraftverk: {
        Row: {
          aarlig_produksjon: number
          beskrivelse: string | null
          byggeaar: number
          driftskostnader: number | null
          estimert_inntekt: number | null
          fallhoyde: number | null
          fylke: string
          id: string
          installert_effekt: number
          kommune: string
          konsesjon_utloper: number | null
          kontakt_epost: string | null
          kontakt_telefon: string | null
          kontaktperson: string | null
          kraftsertifikater: boolean | null
          kraftverk_type: string
          lokasjon: string
          navn: string
          oppdatert_dato: string | null
          opprettet_dato: string | null
          pris: number | null
          publisert: boolean | null
          salgs_beskrivelse: string | null
          status: string | null
          vannforing: number | null
        }
        Insert: {
          aarlig_produksjon: number
          beskrivelse?: string | null
          byggeaar: number
          driftskostnader?: number | null
          estimert_inntekt?: number | null
          fallhoyde?: number | null
          fylke: string
          id?: string
          installert_effekt: number
          kommune: string
          konsesjon_utloper?: number | null
          kontakt_epost?: string | null
          kontakt_telefon?: string | null
          kontaktperson?: string | null
          kraftsertifikater?: boolean | null
          kraftverk_type: string
          lokasjon: string
          navn: string
          oppdatert_dato?: string | null
          opprettet_dato?: string | null
          pris?: number | null
          publisert?: boolean | null
          salgs_beskrivelse?: string | null
          status?: string | null
          vannforing?: number | null
        }
        Update: {
          aarlig_produksjon?: number
          beskrivelse?: string | null
          byggeaar?: number
          driftskostnader?: number | null
          estimert_inntekt?: number | null
          fallhoyde?: number | null
          fylke?: string
          id?: string
          installert_effekt?: number
          kommune?: string
          konsesjon_utloper?: number | null
          kontakt_epost?: string | null
          kontakt_telefon?: string | null
          kontaktperson?: string | null
          kraftsertifikater?: boolean | null
          kraftverk_type?: string
          lokasjon?: string
          navn?: string
          oppdatert_dato?: string | null
          opprettet_dato?: string | null
          pris?: number | null
          publisert?: boolean | null
          salgs_beskrivelse?: string | null
          status?: string | null
          vannforing?: number | null
        }
        Relationships: []
      }
      kraftverk_bilder: {
        Row: {
          beskrivelse: string | null
          bilde_url: string
          er_hovedbilde: boolean | null
          id: string
          kraftverk_id: string | null
          opprettet_dato: string | null
          rekkefølge: number | null
        }
        Insert: {
          beskrivelse?: string | null
          bilde_url: string
          er_hovedbilde?: boolean | null
          id?: string
          kraftverk_id?: string | null
          opprettet_dato?: string | null
          rekkefølge?: number | null
        }
        Update: {
          beskrivelse?: string | null
          bilde_url?: string
          er_hovedbilde?: boolean | null
          id?: string
          kraftverk_id?: string | null
          opprettet_dato?: string | null
          rekkefølge?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "kraftverk_bilder_kraftverk_id_fkey"
            columns: ["kraftverk_id"]
            isOneToOne: false
            referencedRelation: "kraftverk"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          id: string
          email: string
          name: string
          phone: string
          investor_type: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id: string
          email: string
          name: string
          phone: string
          investor_type?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          email?: string
          name?: string
          phone?: string
          investor_type?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
