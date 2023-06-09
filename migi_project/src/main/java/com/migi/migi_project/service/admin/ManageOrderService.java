package com.migi.migi_project.service.admin;

import com.migi.migi_project.model.dto.OrderProductDTO;
import com.migi.migi_project.model.dto.OrdersDTO;
import com.migi.migi_project.model.dto.Revenue;
import com.migi.migi_project.model.response.OrderPage;
import com.migi.migi_project.model.response.ResponseNormal;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ManageOrderService {
    List<OrdersDTO> findOrderByStatus(Integer status, Pageable pageable);
    Long countOdersByStatus(Integer status);
    ResponseNormal confirmOrder(Integer id);
    ResponseNormal updateOrder(OrdersDTO ordersDTO);
    ResponseNormal deleteOrder(Integer id);
    List<Revenue> getRevenue(String year);
    List<OrderProductDTO> getOrderProductByIdOrder(Integer id);
}
