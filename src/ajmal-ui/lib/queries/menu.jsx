import { gql } from '@apollo/client';

export const MEGA_MENU = gql`query {
    amMegaMenuAll {
      items {
        children {
          id
          uid
          name
          label
          path
          parent_id
          status
          label
          is_active
        }
        column_count,
        content,
        desktop_font,
        has_active,
        icon,
        id,
        uid,
        is_active,
        is_category,
        is_parent_active,
        label,
        label_background_color,
        label_text_color,
        mobile_font,
        name,
        path,
        status,
        subcategories_position,
        submenu_type,
        url,
        width,
        width_value
      }
    }
}`
