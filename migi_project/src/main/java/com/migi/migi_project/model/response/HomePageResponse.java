package com.migi.migi_project.model.response;

import com.migi.migi_project.model.dto.ProductDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class HomePageResponse {
    private List<ProductDTO> listNewProduct;
    private List<ProductDTO> listBestSeller;
}
