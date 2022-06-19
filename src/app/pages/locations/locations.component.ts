import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocationResults } from 'src/app/models/locations.model';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  locations?: LocationResults[];
  filteredLocations?: LocationResults[];
  filterByName: any;
  filterByDimension: any;
  locationsSubscription?: Subscription;

  constructor(private locationsService: LocationsService) {}

  ngOnInit(): void {
    this.locationsSubscription = this.locationsService
      .getLocations()
      .subscribe((locationResponse) => {
        this.locations = locationResponse.results;
        this.filteredLocations = [...locationResponse.results];
      });
  }

  filterLocationsByName() {
    this.filteredLocations = [
      ...(this.locations || []).filter((location) =>
        location.name.toLowerCase().includes(this.filterByName)
      ),
    ];
  }

  filterLocationsByDimension(): void {
    this.filteredLocations = [
      ...(this.locations || []).filter((location) =>
        location.dimension.toLowerCase().includes(this.filterByDimension)
      ),
    ];
  }
}
