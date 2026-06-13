package com.jimmytran.crud.repository;

import com.jimmytran.crud.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {
}
